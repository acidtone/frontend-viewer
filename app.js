const root = document.documentElement;
const body = document.querySelector('body');
const modes = document.querySelector('#mode-list');
const aside = document.querySelector('aside');

let eventProperties = [
  {
    val: document.querySelector('#hue'),
    out: document.querySelector('output[for=hue]'),
    type: 'deg',
    cssprop: '--hue'
  },
  {
    val: document.querySelector('#sat'),
    out: document.querySelector('output[for=sat]'),
    type: '%',
    cssprop: '--sat'
  },
  {
    val: document.querySelector('#lum'),
    out: document.querySelector('output[for=lum]'),
    type: '%',
    cssprop: '--lum'
  },
  {
    val: document.querySelector('#alpha'),
    out: document.querySelector('output[for=alpha]'),
    type: '',
    cssprop: '--alpha'
  }
];

function eventAdder(controlProperties) {
  for(let {val, out, type, cssprop} of controlProperties) {
    val.addEventListener('input', function(event) {
      out.value = val.value + type;
      root.style.setProperty(cssprop, out.value);
    })
  }
}

eventAdder(eventProperties);

modes.addEventListener('click', function(event){
  body.style.setProperty('--blend-mode', getComputedStyle(event.target).backgroundBlendMode);
  body.style.setProperty('background-color', 'var(--color)');
  modes.style.setProperty('visibility','hidden');
  modes.style.setProperty('opacity',0);
  aside.style.setProperty('opacity',.2);
  body.style.setProperty('transition','none');
  event.stopPropagation();
})

aside.addEventListener('click', function(event){
  event.stopPropagation();
})

body.addEventListener('click', function(event){
  body.style.setProperty('transition','.5s ease background-color');
  body.style.setProperty('background-color', 'transparent');
  modes.style.setProperty('visibility','visible');
  modes.style.setProperty('opacity',1);
  aside.style.setProperty('opacity',1);
})


console.log(innerWidth);
console.log(innerHeight);