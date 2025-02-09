"use client"

import { Utensils, MapPinned, CalendarClock } from "lucide-react"
import { useState } from "react"
import DirectionsModal from "./directionsModal"
import Link from "next/link"
import HorariosModal from "./horariosModal"

export default function BottomBar() {
  const iconSize = 20
  const [showDirections, setShowSirections] = useState(false)
  const [showHorarios, setShowHorarios] = useState(false)

  return (
    <div>
      <div className="fixed bottom-2 right-2/4 z-10 w-fit translate-x-2/4 overflow-hidden rounded-lg border border-gray-300 bg-whiteOverlay shadow-lg">
        <div className="flex h-full w-full items-center justify-center px-4 text-blue-600 backdrop-blur-md backdrop-filter">
          <Link
            href="/menu"
            className="flex flex-col items-center justify-center gap-1 px-4 py-2"
          >
            <Utensils size={iconSize} className="" />
            <p className="text-center text-xs text-gray-700">Men&uacute;</p>
          </Link>
          <button
            type="button"
            className="flex flex-col items-center justify-center gap-1 px-4 py-2"
            onClick={() => setShowSirections(true)}
          >
            <MapPinned size={iconSize} className="" />
            <p className="text-center text-xs text-gray-700">
              Direcci&oacute;n
            </p>
          </button>
          <button
            type="button"
            className="flex flex-col items-center justify-center gap-1 px-4 py-2"
            onClick={() => setShowHorarios(true)}
          >
            <CalendarClock size={iconSize} className="" />
            <p className="text-center text-xs text-gray-700">Horarios</p>
          </button>
        </div>
      </div>

      {/*
       * -----------------------------------
       *   Modals
       * -----------------------------------
       */}
      <div>
        {/* Direccion y GPS */}
        <DirectionsModal
          isVisible={showDirections}
          closeFn={setShowSirections}
        />

        {/* Horarios */}
        <HorariosModal isVisible={showHorarios} closeFn={setShowHorarios} />
      </div>
    </div>
  )
}
