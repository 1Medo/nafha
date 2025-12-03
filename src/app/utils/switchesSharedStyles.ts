export const switchesSharedStyles = {
  box: `
    w-4 h-4 border border-Text-text-primary rounded
    flex items-center justify-center
    transition-all
    
  `,

  states: `
    peer-hover:bg-Buttons-button-secondary-hover-bg
    peer-active:ring-2 peer-active:ring-Background-bg-secondary
    peer-active:bg-Background-bg-primary
    peer-active:border-Brand-primary
    peer-checked:border-Brand-primary
  `,

  checkboxIcon: `
    transition-opacity opacity-0 
    peer-checked:opacity-100
  `
};
