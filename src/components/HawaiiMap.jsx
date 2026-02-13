import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { islands, mapConfig } from '../data/hawaiiData'

export default function HawaiiMap({ selectedIsland, onSelectIsland }) {
  const mapRef = useRef(null)
  const mapInstanceRef = useRef(null)
  const markersRef = useRef([])
  const onSelectRef = useRef(onSelectIsland)

  // Mantener siempre la referencia actualizada del callback
  useEffect(() => {
    onSelectRef.current = onSelectIsland
  }, [onSelectIsland])

  useEffect(() => {
    if (mapInstanceRef.current) return

    // Initialize map
    const map = L.map(mapRef.current, {
      center: mapConfig.center,
      zoom: mapConfig.zoom,
      minZoom: mapConfig.minZoom,
      maxZoom: mapConfig.maxZoom,
      zoomControl: false,
      attributionControl: false,
      maxBounds: L.latLngBounds(mapConfig.bounds[0], mapConfig.bounds[1]),
      maxBoundsViscosity: 0.8,
    })

    // Tile layer - vista satelital real
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri',
    }).addTo(map)

    // Capa de nombres/labels sobre el satélite
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}', {
      attribution: '',
    }).addTo(map)

    // Add island markers
    islands.forEach(island => {
      const markerHtml = `
        <div class="island-marker" data-island="${island.id}" style="border-color: ${island.color}">
          <span>${island.emoji}</span>
          <div class="island-marker-label">${island.name}</div>
        </div>
      `

      const icon = L.divIcon({
        html: markerHtml,
        className: '',
        iconSize: [60, 70],
        iconAnchor: [30, 30],
      })

      const marker = L.marker(island.position, { icon })
        .addTo(map)
        .on('click', (e) => {
          console.log('🏝️ Island clicked:', island.name, island.id)
          L.DomEvent.stopPropagation(e)
          onSelectRef.current(island)
          map.flyTo(island.position, 9, {
            duration: 1,
            easeLinearity: 0.25,
          })
        })

      markersRef.current.push({ id: island.id, marker })
    })

    // Add decorative ocean labels
    const oceanLabels = [
      { pos: [19.0, -158.5], text: '🌊 Pacific Ocean' },
      { pos: [22.3, -155.5], text: '~ ~ ~' },
      { pos: [19.5, -153.5], text: '~ ~ ~' },
    ]

    oceanLabels.forEach(label => {
      L.marker(label.pos, {
        icon: L.divIcon({
          html: `<span style="color: rgba(255,255,255,0.1); font-size: 11px; white-space: nowrap; font-style: italic;">${label.text}</span>`,
          className: '',
          iconSize: [100, 20],
          iconAnchor: [50, 10],
        }),
        interactive: false,
      }).addTo(map)
    })

    mapInstanceRef.current = map

    return () => {
      map.remove()
      mapInstanceRef.current = null
    }
  }, [])

  // Handle selected island changes
  useEffect(() => {
    if (!mapInstanceRef.current) return

    markersRef.current.forEach(({ id, marker }) => {
      const el = marker.getElement()
      if (!el) return
      const markerDiv = el.querySelector('.island-marker')
      if (!markerDiv) return

      if (selectedIsland && selectedIsland.id === id) {
        markerDiv.classList.add('active')
      } else {
        markerDiv.classList.remove('active')
      }
    })

    if (!selectedIsland && mapInstanceRef.current) {
      mapInstanceRef.current.flyTo(mapConfig.center, mapConfig.zoom, {
        duration: 0.8,
      })
    }
  }, [selectedIsland])

  return (
    <div className="absolute inset-0">
      <div ref={mapRef} className="h-full w-full" />

      {/* Gradient overlays for depth */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-hawaii-night/80 to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-hawaii-night/90 to-transparent pointer-events-none z-10" />

      {/* Floating instruction */}
      {!selectedIsland && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
          <div className="glass px-4 py-2 rounded-full flex items-center gap-2 animate-bounce">
            <span className="text-xs">👆</span>
            <span className="text-[11px] text-white/70 font-medium">
              Lili, toca una isla para explorar 🌺
            </span>
          </div>
        </div>
      )}
    </div>
  )
}
