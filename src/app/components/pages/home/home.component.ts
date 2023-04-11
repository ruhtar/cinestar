import { Component} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  images = [
    { image: 'https://canalcienciascriminais.com.br/wp-content/uploads/2019/05/cinema.png', 
      thumbImage: 'https://canalcienciascriminais.com.br/wp-content/uploads/2019/05/cinema.png' },
    { image: 'https://www.acessa.com/_midias/jpg/2023/02/08/800x533/1_20220914_sala_de_cinema-150861.jpeg',
      thumbImage: 'https://www.acessa.com/_midias/jpg/2023/02/08/800x533/1_20220914_sala_de_cinema-150861.jpeg' },
    { image: 'https://cdn.ibahia.com/wp-content/uploads/2022/10/cinema.png', 
      thumbImage: 'https://cdn.ibahia.com/wp-content/uploads/2022/10/cinema.png' },
    { image: 'https://muralzinhodeideias.com.br/wp-content/uploads/2023/02/cinema-divulgacao.jpeg', 
      thumbImage: 'https://muralzinhodeideias.com.br/wp-content/uploads/2023/02/cinema-divulgacao.jpeg' },
    { image: 'https://www.carlosmagno.com.br/fotos_do_sistema/Cinema_Pipoca.jpg', 
      thumbImage: 'https://www.carlosmagno.com.br/fotos_do_sistema/Cinema_Pipoca.jpg' }
  ];
}
