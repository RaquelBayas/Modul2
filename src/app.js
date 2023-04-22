const name = 'world';
console.log(`Hello ${name}`);

import Glide from '@glidejs/glide'

new Glide('.glide',{
    type: 'carousel',
    focusAt: 'center',
}).mount();