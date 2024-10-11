import { Component, EventEmitter, Output } from '@angular/core';
import { Document } from '../document.model';

@Component({
  selector: 'cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrl: './document-list.component.css'
})
export class DocumentListComponent {
  @Output() selectedDocumentEvent = new EventEmitter<Document>();
  documents: Document[] = [
    new Document(1, 'CSE121B - JavaScript Language', 'This course introduces students to using JavaScript to solve discipline specific problems.', 'https://www.byui.edu/catalog/#/courses/HJQ8ALkam?bc=true&bcCurrent=CSE121B%20-%20JavaScript%20Language&bcGroup=Computer%20Science&bcItemType=courses', null),
    new Document(2, 'CSE222B - Kotlin Language', 'This course introduces students to using Kotlin to solve discipline specific problems.', 'https://www.byui.edu/catalog/#/courses/BJsJ9xAn7?bc=true&bcCurrent=CSE222B%20-%20Kotlin%20Language&bcGroup=Computer%20Science&bcItemType=courses', null),
    new Document(3, 'CSE320A - Mobile Programming', 'This course introduces students mobile programming using one of two platforms, iOS or Android. Students may choose to create and program for mobile or wearables for either platform.', 'https://www.byui.edu/catalog/#/courses/HkBHlDk6Q?bc=true&bcCurrent=CSE320A%20-%20Mobile%20Programming&bcGroup=Computer%20Science&bcItemType=courses', null),
    new Document(4, 'CSE499 - Senior Project', 'In this course, students will gain experience with directed individual or group research and study of a topic in computer science not covered by the curriculum. Students will demonstrate their ability to learn and apply new material by completing a significant project.', 'https://www.byui.edu/catalog/#/courses/Ek-Px2lho-?bc=true&bcCurrent=CSE499%20-%20Senior%20Project&bcGroup=Computer%20Science&bcItemType=courses', null)
  ];

  onSelectedDocument(document: Document) {
    this.selectedDocumentEvent.emit(document);
  }
}
