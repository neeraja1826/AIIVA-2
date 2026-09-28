import { useState } from 'react';

export function useDashboard() {
  const [lightLevel, setLightLevel] = useState(78);
  const [lightsOn, setLightsOn] = useState(true);
  const [bedroomTemp, setBedroomTemp] = useState(21);
  const [armed, setArmed] = useState(true);
  const [curtainsOpen, setCurtainsOpen] = useState(true);

  const adjustTemp = (delta: number) =>
  setBedroomTemp((t) => Math.min(28, Math.max(16, Math.round((t + delta) * 2) / 2)));

  return {
    lightLevel,
    setLightLevel,
    lightsOn,
    setLightsOn,
    bedroomTemp,
    adjustTemp,
    armed,
    setArmed,
    curtainsOpen,
    setCurtainsOpen
  };
}