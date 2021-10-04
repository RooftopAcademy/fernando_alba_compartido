
export default function carrouselComponent() {
    return `
        <div class="carrousel d-flex">
            <img class="carrousel-img" src="https://cartzilla.createx.studio/img/home/hero-slider/01.jpg" alt="Summer Collection">
            <div class="carrousel-text">
                <h3 class="h3 text-light">Has just arrived!</h3>
                <h2 class="h2 text-light">Huge Summer Collection</h2>
                <p class="p text-light">Swimwear, Tops, Shorts, Sunglasses &amp; much more...</p>
                <a class="btn btn-primary ts-route" href="/products">Shop Now
                    <i class="arrow-icon fas fa-chevron-right"></i>
                </a>
            </div>
        </div>
    `
}