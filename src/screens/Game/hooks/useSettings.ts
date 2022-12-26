import { useEffect, useState } from 'react'
import { initialSettings } from '../initialSettings'

export function useSettings(score: number) {
  const [settings, setSettings] = useState(initialSettings.SETTINGS)

  useEffect(() => {
    function handleSettings() {
      setSettings({
        requiredScore: settings.requiredScore * 2,
        minNumber: settings.minNumber - 10,
        maxNumber: settings.maxNumber + 10,
        timeToAdd: settings.timeToAdd / 2,
        timeToSub: settings.timeToAdd * 2,
      })
    }

    score > settings.requiredScore && handleSettings()
  }, [score, settings.maxNumber, settings.minNumber, settings.requiredScore, settings.timeToAdd])

  function resetSettings() {
    setSettings(initialSettings.SETTINGS)
  }

  return { settings, resetSettings }
}
