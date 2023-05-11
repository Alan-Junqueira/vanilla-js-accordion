// Add your javascript here

const allAccordions = document.querySelectorAll('.accordion')
const allDescriptions = document.querySelectorAll('.description')

// Hide descriptions except first
allDescriptions.forEach((description, index) => {
  const expandableIcon = document.querySelector(`[data-testid="${index + 1}"] .title-section .expand-icon`)
  const collapsableIcon = document.querySelector(`[data-testid="${index + 1}"] .title-section .collapse-icon`)
  if(index === 0){
    collapsableIcon.style.display = 'inline-block'
    expandableIcon.style.display = 'none'
    return
  }

  collapsableIcon.style.display = 'none'
  expandableIcon.style.display = 'inline-block'
  description.style.display = 'none'
})


const multiselect = document.getElementById("multiselect");
let multipleIsChecked = multiselect.checked;

multiselect.addEventListener("change", function() {
  multipleIsChecked = multiselect.checked;
});


function openOrToggleAccordion(accordionId){
  const expandableIcon = document.querySelector(`[data-testid="${accordionId}"] .title-section .expand-icon`)
  const collapsableIcon = document.querySelector(`[data-testid="${accordionId}"] .title-section .collapse-icon`)

  if(collapsableIcon.style.display === 'inline-block' ) {
    collapsableIcon.style.display = 'none'
    expandableIcon.style.display = 'inline-block'
    allDescriptions[accordionId - 1].style.display = 'none'
    return
  }

  if(!multipleIsChecked){
    closeAllAccordions()
  }

  collapsableIcon.style.display = 'inline-block'
  expandableIcon.style.display = 'none'
  allDescriptions[accordionId - 1].style.display = 'inline-block'
}

function closeAllAccordions(){
  allDescriptions.forEach((description, index) => {
    const expandableIcon = document.querySelector(`[data-testid="${index + 1}"] .title-section .expand-icon`)
    const collapsableIcon = document.querySelector(`[data-testid="${index + 1}"] .title-section .collapse-icon`)
  
    collapsableIcon.style.display = 'none'
    expandableIcon.style.display = 'inline-block'
    description.style.display = 'none'
  })
}

allAccordions.forEach((accordion, index) => {
  accordion.addEventListener("click", () => {
    openOrToggleAccordion(index + 1)
  })
})
