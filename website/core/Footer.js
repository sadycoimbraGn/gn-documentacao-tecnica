const React = require("react");

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
    const langPart = `${language ? `${language}/` : ""}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : "") + doc;
  }

  render() {
    return (
      <footer className="footer">
        <div className="whinter-container menu">
          <div className="row pos-relative">
            <div className="col-lg-3 no-mobile">
              {" "}
              <a href="/" className="marca-rodape">
                <span>Gerencianet</span>
              </a>
            </div>
            <div className="col-lg-9 pos-relative">
              <div className="row">
                <div className="col-lg-12 mx-auto d-flex menu--list">
                  <div className="column-1 no-phone">
                    <h2>Precisa de Ajuda?</h2>
                    <ul>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-11848">
                        <a href="https://gerencianet.com.br/blog/">Blog</a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4496">
                        <a href="https://gerencianet.com.br/central-de-ajuda/">
                          Central de Ajuda
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-11849">
                        <a href="https://gerencianet.com.br/fale-conosco/">
                          Fale conosco
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-11666">
                        <a href="/fale-conosco#ouvidoria">Ouvidoria</a>
                      </li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4497">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://dev.gerencianet.com.br/docs"
                        >
                          Desenvolvedores
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="column-2 no-phone">
                    <h2>Conheça mais</h2>
                    <div className="d-flex">
                      <ul className="col-lg-7">
                        <li>
                          Soluções
                          <ul>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-11838">
                              <a href="/solucoes#boletos">Boletos</a>
                            </li>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-11839">
                              <a href="/solucoes#carnes">Carnês</a>
                            </li>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-11840">
                              <a href="/solucoes#links-de-pagamento">
                                Links de pagamento
                              </a>
                            </li>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-11841">
                              <a href="/solucoes#assinaturas">Assinaturas</a>
                            </li>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-11842">
                              <a href="/solucoes#marketplace">Marketplace</a>
                            </li>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-11991">
                              <a href="/solucoes#cartao-pre-pago">
                                Cartão pré-pago
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                      <ul className="col-lg-5">
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-11989">
                          <a href="https://gerencianet.com.br/meu-cartao/">
                            Meu Cartão
                          </a>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-52">
                          <a href="https://gerencianet.com.br/tarifas/">
                            Tarifas
                          </a>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-307">
                          <a href="https://gerencianet.com.br/parceiros/">
                            Parceiros
                          </a>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-50">
                          <a href="https://gerencianet.com.br/empresa/">
                            Sobre a Gerencianet
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="column-3 no-phone">
                    <h2>Utilidades</h2>
                    <ul>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4499">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="/trabalheconosco"
                        >
                          Trabalhe conosco
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4502">
                        <a href="https://gerencianet.com.br/diretrizes-da-marca/">
                          Diretrizes da marca
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6845">
                        <a href="https://gerencianet.com.br/confirmacoes/">
                          Status das confirmações
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-11835">
                        <a href="https://gerencianet.com.br/termos-de-uso/">
                          Termos de uso
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-11837">
                        <a href="https://gerencianet.com.br/politica-de-privacidade/">
                          Política de privacidade
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="yes-phone col-9">
                    <h2>Acompanhe-nos</h2>
                    <ul className="social">
                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-11843">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.youtube.com/channel/UC4MAxjM78Yg3eK8v0V2yLHw"
                        >
                          <span className="icon-youtube"></span>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-11844">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.facebook.com/Gerencianet"
                        >
                          <span className="icon-facebook"></span>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-11845">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://twitter.com/@gerencianet"
                        >
                          <span className="icon-twitter"></span>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-11846">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.instagram.com/gerencianet/"
                        >
                          <span className="icon-instagram"></span>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-11847">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.linkedin.com/company/ger-ncianet-pagamentos-do-brasil"
                        >
                          <span className="icon-linkedin"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="wrapper-line">
                <div className="outer-line"></div>
                <div className="inner-line"></div>
              </div>
            </div>
            <div className="row justify-content-center no-phone">
              <div className="col-lg-12 mx-auto d-flex">
                <div className="column-4">
                  <ul className="download-app">
                    <li>
                      <a
                        href="https://play.google.com/store/apps/details?id=br.com.gerencianet.app&amp;hl=pt-BR"
                        className="google-play"
                        target="_blank"
                        rel="noopener"
                      >
                        <span>Disponível na Google play</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://apps.apple.com/br/app/gerencianet/id1443363326"
                        className="app-store"
                        target="_blank"
                        rel="noopener"
                      >
                        <span>Disponível na App Store</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="column-5 flex-center">
                  <ul className="social">
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-11843">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.youtube.com/channel/UC4MAxjM78Yg3eK8v0V2yLHw"
                      >
                        <span className="icon-youtube"></span>
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-11844">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.facebook.com/Gerencianet"
                      >
                        <span className="icon-facebook"></span>
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-11845">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://twitter.com/@gerencianet"
                      >
                        <span className="icon-twitter"></span>
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-11846">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.instagram.com/gerencianet/"
                      >
                        <span className="icon-instagram"></span>
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-11847">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.linkedin.com/company/ger-ncianet-pagamentos-do-brasil"
                      >
                        <span className="icon-linkedin"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row justify-content-md-center">
              <div className="col-lg-12">
                <div className="column-6">
                  {" "}
                  <span className="termos-e-condicoes">
                    {" "}
                    © 2007-2019 Gerencianet.
                    <br className="yes-phone" /> Todos os direitos reservados.
                    <br /> Gerencianet Pagamentos do Brasil Ltda.
                    <br className="yes-phone" /> CNPJ: 09.089.356/0001-18
                    <div className="yes-phone">
                      <br />{" "}
                      <a href="http://gerencianet.com.br/termos-de-uso">
                        Termos de uso
                      </a>{" "}
                      -{" "}
                      <a href="http://gerencianet.com.br/politica-de-privacidade">
                        Política de privacidade
                      </a>
                    </div>{" "}
                  </span>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-11 pci">
                <div className="col-md-3 pci-width">
                  <a
                    href="https://gerencianet.com.br/artigo/gerencianet-possui-certificacao-pci-dss/"
                    target="_blank"
                    rel="noopener"
                  >
                    <img src="/img/teste.png"></img>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <script
          id="ze-snippet"
          src="https://v2.zopim.com/?2NfJzLLgYjRjfHyYSrFYaRrUkFhQMwOS"
        >
          {" "}
        </script>
      </footer>
    );
  }
}

module.exports = Footer;
