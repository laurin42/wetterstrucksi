export default function ghostLoader({ src, width, quality }) {

    const params = [`w=${width}`, `q=${quality || 75}`];


    return `${src}?${params.join('&')}`;
}


// return src;