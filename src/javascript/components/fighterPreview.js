import { createElement } from '../helpers/domHelper';

export function createFighterPreview(fighter, position) {
  const positionClassName = position === 'right' ? 'fighter-preview___right' : 'fighter-preview___left';
  const fighterElement = createElement({
    tagName: 'div',
    className: `fighter-preview___root ${positionClassName}`,
  });

  // todo: show fighter info (image, name, health, etc.)
  if(fighter) {
    const fighterImg = createFighterImage(fighter);
    const fighterName = createElement({ tagName: 'h4' });
    const fighterDetails = createElement({
      tagName: 'div',
      className: 'fighter-details'
    });
    fighterDetails.innerHTML = `
      <div class="fighter-detail-cell">
        <!-- icon-attack -->
      </div>
      <div class="fighter-detail-cell">
        <!-- icon-defense -->
      </div>
      <div class="fighter-detail-cell">
        <!-- icon-health -->
      </div>
      <div class="fighter-detail-cell">
        <p>${fighter.attack}</p>
      </div>
      <div class="fighter-detail-cell">
        <p>${fighter.defense}</p>
      </div>
      <div class="fighter-detail-cell">
        <p>${fighter.health}</p>
      </div>
    `;
    fighterName.innerText = fighter.name;
    fighterElement.append(fighterImg, fighterName, fighterDetails);
  }
    return fighterElement;

  return fighterElement;
}

export function createFighterImage(fighter) {
  const { source, name } = fighter;
  const attributes = { 
    src: source, 
    title: name,
    alt: name 
  };
  const imgElement = createElement({
    tagName: 'img',
    className: 'fighter-preview___img',
    attributes,
  });

  return imgElement;
}