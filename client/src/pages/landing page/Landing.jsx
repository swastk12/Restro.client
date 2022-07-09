import React from 'react'
import './landing.css'
const Landing = () => {
  return (
    <div>
     

 
  <section id="peca-agora">
    <div class="carousel slide carousel-fade carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="5000">
          <a href="/home">
            <img class="d-block w-100" src="https://i.ibb.co/NjKG8yc/Salgada-ou-doce-1.png" alt="promoção"/>
          </a>
        </div>
        <div class="carousel-item" data-bs-interval="5000">
          <a href="#">
            <img class="d-block w-100" src="https://i.ibb.co/5YVxX1H/pizza2.png" alt="Segundo Slide"/>
          </a>
        </div>
        <div class="carousel-item" data-bs-interval="5000">
          <a href="#">
            <img class="d-block w-100" src="https://i.ibb.co/rQD0G25/pizza3.png" alt="Terceiro Slide"/>
          </a>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
      </a>
      <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
      </a>
    </div>
</section>



<section id="menu">
    <section id="cardapio" class="menu">
      <div class="container overflow-auto">
        <div class="section-title">
          <h2 class="text-center text-white">Nosso Cardápio </h2>
        </div>
        <div class="row menu-container">
          <div class="col-lg-6 menu-item filter-starters">
            <div class="menu-content">
              <a href="#peca-agora">Quatro queijos</a><span>R$35.95</span>
            </div>
            <div class="menu-ingredients">
              ingredientes, etc, ingredientes, etc,ingredientes, etc
            </div>
          </div>

          <div class="col-lg-6 menu-item filter-specialty">
            <div class="menu-content">
              <a href="#peca-agora">Frango com catupiry</a><span>R$46.95</span>
            </div>
            <div class="menu-ingredients">
              ingredientes, etc, ingredientes, etc,ingredientes, etc
            </div>
          </div>

          <div class="col-lg-6 menu-item filter-starters">
            <div class="menu-content">
              <a href="#peca-agora">Atum</a><span>R$47.95</span>
            </div>
            <div class="menu-ingredients">
              ingredientes, etc, ingredientes, etc,ingredientes, etc
            </div>
          </div>

          <div class="col-lg-6 menu-item filter-salads">
            <div class="menu-content">
              <a href="#peca-agora">Napolitana</a><span>R$38.95</span>
            </div>
            <div class="menu-ingredients">
              ingredientes, etc, ingredientes, etc,ingredientes, etc
            </div>
          </div>

          <div class="col-lg-6 menu-item filter-specialty">
            <div class="menu-content">
              <a href="#peca-agora">Portuguesa</a><span>R$49.95</span>
            </div>
            <div class="menu-ingredients">
              ingredientes, etc, ingredientes, etc,ingredientes, etc
            </div>
          </div>

          <div class="col-lg-6 menu-item filter-starters">
            <div class="menu-content">
              <a href="#peca-agora">Lombinho canadense</a><span>R$44.95</span>
            </div>
            <div class="menu-ingredients">
              ingredientes, etc, ingredientes, etc,ingredientes, etc
            </div>
          </div>

          <div class="col-lg-6 menu-item filter-salads">
            <div class="menu-content">
              <a href="#peca-agora">Calabresa</a><span>R$39.95</span>
            </div>
            <div class="menu-ingredients">
              ingredientes, etc, ingredientes, etc,ingredientes, etc
            </div>
          </div>

          <div class="col-lg-6 menu-item filter-salads">
            <div class="menu-content">
              <a href="#peca-agora">Rúcula com tomate seco</a><span>R$59.95</span>
            </div>
            <div class="menu-ingredients">
              ingredientes, etc, ingredientes, etc,ingredientes, etc
            </div>
          </div>

          <div class="col-lg-6 menu-item filter-specialty">
            <div class="menu-content">
              <a href="#peca-agora">Camarão</a><span>R$82.95</span>
            </div>
            <div class="menu-ingredients">
              ingredientes, etc, ingredientes, etc,ingredientes, etc
            </div>
          </div>
        </div>
      </div>
     </section>
    </section>
    

    <section id='quem-somos'>
      <div class="container">
        <div class="section-title text-center text-white">
          <h2>Quem Somos</h2>
          <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>

        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6">
            <div class='place'>
              <div class="pic"><img src="https://i.ibb.co/vZbhf8g/2.png" class="img-fluid" alt="pizza-camarao"/>
                <div class="overlay">
                  <div class="subtitle">nossas pizzas</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class='place'>
              <div class="pic"><img src="https://i.ibb.co/Z6XGRmj/3.png" class="img-fluid" alt="menu-e-vinho"/>
                <div class="overlay">
                  <div class="subtitle">nosso espaço</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class='place'>
              <div class="pic"><img src="https://i.ibb.co/HqK3ks3/1.png" class="img-fluid" alt="clientes"/>
                <div class="overlay">
                  <div class="subtitle">nossos clientes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>





    <footer id="contact" class="contact-section border-top">
      <div class="contact-section-header">
        <p class='text-muted'>desenvolvido por:</p>
        <p class='h3'>Samara Dumont Fadigas</p>
        <p class='h6'><em>web developer enthusiast</em></p>
      </div>
      <div class="contact-links border-top">
        <a href="https://codepen.io/sdfadigas" target="_blank" class="btn text-white contact-details">
          <i class="fa-brands fa-codepen"></i> Codepen</a>
        <a id="profile-link" href="https://github.com/sdfadigas" target="_blank" class="btn text-white contact-details"><i class="fab fa-github"></i> GitHub</a>
        <a href="https://twitter.com/oxesasa" target="_blank" class="btn text-white contact-details"><i class="fab fa-twitter"></i> Twitter</a>
        <a href="https://instagram.com/samara.srd" target="_blank" class="btn text-white contact-details"><i class="fa-brands fa-instagram"></i> Instagram</a>
        <a href="mailto:sdfadigas@gmail.com" class="btn text-white contact-details"><i class="fas fa-at"></i> Me escreva</a>
        <a href="https://wa.me/5548991077107" class="btn text-white contact-details"><i class="fa-brands fa-whatsapp"></i> Me ligue</a>
      </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>




 </div>    
    
  )
}

export default Landing
