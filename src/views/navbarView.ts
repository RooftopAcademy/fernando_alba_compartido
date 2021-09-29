
export default function navbarView() {
    return `
    <div class="navbar">
        <div class="navbar-group d-flex" id="navbar-group">
            <a class="logo small ts-route" href="" data-route="/">
                <img src="https://cartzilla.createx.studio/img/logo-icon.png" alt="Cartzilla"/>
            </a>
            <a class="logo large ts-route" href="" data-route="/">
                <img src="https://cartzilla.createx.studio/img/logo-dark.png" alt="Cartzilla"/>
            </a>
            <div class="navbar-search" id="navbar-search">
                <input class="input" type="text" placeholder="Search for products" />
                <i class="search-icon fas fa-search"></i>
            </div>
            <div class="navbar-toolbar d-flex" id="toolbar">
                <div class="navbar-tool toggle" id="toggle-btn">
                    <div class="navbar-tool-icon-box">
                        <i class="navbar-tool-icon fas fa-bars"></i>
                    </div>
                </div>
                <a class="navbar-tool wish-list ts-route" data-route="">
                    <div class="navbar-tool-icon-box">
                        <i class="navbar-tool-icon far fa-heart"></i>
                    </div>
                </a>
                <a class="navbar-tool d-flex ts-route" data-route="/">
                    <div class="navbar-tool-icon-box">
                        <i class="navbar-tool-icon far fa-user"></i>
                    </div>
                    <div class="navbar-tool-text d-flex">
                        <small>Hello, Sign in</small>
                        My Account
                    </div>
                </a>
                <div class="navbar-tool d-flex ts-route" data-route="/">
                    <div class="navbar-tool-icon-box">
                        <span class="navbar-tool-icon-label">0</span>
                        <i class="navbar-tool-icon fas fa-shopping-cart"></i>
                    </div>
                    <div class="navbar-tool-text text-cart d-flex">
                        <small>My Cart</small>
                        $0
                    </div>
                </div>
            </div>
            <div class="navbar-menu d-flex hidden" id="navbar-menu">
                <div class="navbar-menu-item"><a class="a ts-route" href="" data-route="/products">Woman</a></div>
                <div class="navbar-menu-item"><a class="a ts-route" href="" data-route="/products">Man</a></div>
                <div class="navbar-menu-item"><a class="a ts-route" href="" data-route="/products">Kid</a></div>
                <div class="navbar-menu-item"><a class="a ts-route" href="" data-route="/products">Sport</a></div>
                <div class="navbar-menu-item"><a class="a ts-route" href="" data-route="/products">Sales</a></div>
            </div>
        </div>
    </div>
    `
}