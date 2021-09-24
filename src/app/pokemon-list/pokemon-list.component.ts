import { Component} from '@angular/core';
import { PokemonService } from 'src/_services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent  {
  constructor(
    public pokemonService: PokemonService,
  ) {
  }
}



