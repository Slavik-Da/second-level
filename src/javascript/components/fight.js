import { controls } from '../../constants/controls';

export async function fight(firstFighter, secondFighter) {
  document.addEventListener('keypress', (event) => {
    const keyName = event.key;
  
    alert('keypress event\n\n' + 'key: ' + keyName);

  });
  return new Promise((resolve) => {
    // resolve the promise with the winner when fight is over
  });
}

export function getDamage(attacker, defender) {
  // return damage
  
    return getHitPower(attacker)-getBlockPower(defender)
  };



export function getHitPower({attack}) {
  // return hit power
  const criticalHitChance = Math.random() + 1;

  return attack*criticalHitChance;
}

export function getBlockPower({defense}) {
  // return block power
  const dodgeChance = Math.random() + 1;
  return defense*dodgeChance;
}