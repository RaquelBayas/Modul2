import Glide from '@glidejs/glide'

const name = 'world';
console.log(`Hello ${name}`);

new Glide('.glide',{
    type: 'carousel',
    focusAt: 'center',
}).mount();