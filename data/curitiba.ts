const currentYear = new Date().getFullYear();
const yearsInMarket = currentYear - 1980;

const siteData = {
  Header: {
    telefone: "(41) 3366-5490",
    email: "rederealmais@bateriasreal.com.br",
    whatsapp: "+554133665490"
  },
  Banner: {
    titulo: "Bem-vindo à <span>Rede Baterias RealMais</span>",
    subtitulo: "Seu Especialista em Baterias Automotivas em Curitiba!",
    texto: `<p>Oferecemos as melhores soluções em baterias automotivas para você.</p> <p>Marca com ${yearsInMarket} anos de mercado, que oferece linha completa de baterias para veículos leves e pesados, garantindo a energia que você precisa para qualquer jornada.</p>`,
    informativo: "Baterias direto da fábrica"
  },
  Sobre: {
    texto: "<p class='text-lg'>Nossa missão é não apenas fornecer baterias de alta qualidade, mas também garantir que nossos clientes tenham sempre o suporte necessário para manter seus veículos em pleno funcionamento...</p><br /><p class='text-lg font-semibold'>Entre em contato conosco e descubra como podemos ajudar a manter seu veículo sempre em movimento!</p>",
    whatsapp: "+554133665490",
    images: [
      "/assets/images/curitiba/01.webp",
      "/assets/images/curitiba/03.webp",
      "/assets/images/curitiba/04.webp",
      "/assets/images/curitiba/05.webp"
    ]
  },
  Localizacao: {
    endereco: "Avenida Prefeito Maurício Fruet, 3246 - Cajuru - Curitiba - PR - 82920-330 - Brasil",
    localMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.8150546751317!2d-49.209950899999995!3d-25.444446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce5669d66a7e9%3A0x5784855a97e495a5!2sAv.%20Prefeito%20Maur%C3%ADcio%20Fruet%2C%203246%20-%20Cajuru%2C%20Curitiba%20-%20PR%2C%2082920-330!5e0!3m2!1spt-BR!2sbr!4v1751326833458!5m2!1spt-BR!2sbr"
  }
};

export default siteData;
