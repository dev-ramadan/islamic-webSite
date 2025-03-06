const navitem = document.querySelector("#nav");
const NavBar = `
<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><img src="dist/image/loo.png" class="logo img-fluid"></img></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <i class="fa-solid fa-bars menu"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
       <div class="col-lg-6">

       </div>
       <ul class="navbar-nav me-auto mb-2 mb-lg-0 col-lg-6 justify-content-around">
        <li class="nav-item text-light">
          <a class="nav-link active" aria-current="page" href="index.html">Home</a>
        </li>
        <li class="nav-item text-light">
          <a class="nav-link" href="livePage.html">Live</a>
        </li>
        <li class="nav-item text-light">
          <a class="nav-link" href="moshf.html">Moshf</a>
        </li>
        <li class="nav-item text-light">
          <a class="nav-link" href="radio.html">Radio</a>
        </li>
                <li class="nav-item text-light">
          <a class="nav-link" href="time.html">Time</a>
        </li>
      </ul>
      </div>
    </div>
  </nav>
`;
navitem.innerHTML = NavBar;
