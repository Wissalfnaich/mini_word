import { Component } from '@angular/core';

@Component({
  selector: 'app-mini-word',
  templateUrl: './mini-word.component.html',
  styleUrls: ['./mini-word.component.css']
})
export class MiniWordComponent {
  textColor: string = 'black'; // Couleur du texte par défaut
  textSize: number = 14; // Taille du texte par défaut
  fontFamily: string = 'Arial'; // Police par défaut

  // Liste de polices
  fontList: string[] = ['Arial', 'Helvetica', 'Times New Roman', 'Courier New', 'Verdana'];

}
