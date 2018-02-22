import { Component } from '@angular/core';

import { UserRepositoryService } from "../core/user-repository.service";
import { CatalogRepositoryService } from "../catalog/catalog-repository.service";
import { FilterClassesService } from './filter-classes.service';

@Component({
  styleUrls: ['./catalog.component.css'],
  templateUrl: './catalog.component.html'
})
export class CatalogComponent {
  classes:any[];
  visibleClasses:any[];

  constructor(private userRepository:UserRepositoryService,
    private catalogRepository:CatalogRepositoryService, 
    private filterClassesService : FilterClassesService) {}

  ngOnInit() {
    this.catalogRepository.getCatalog()
      .subscribe(classes => { this.classes = classes; this.applyFilter('')});
  }

  enroll(classToEnroll) {
    classToEnroll.processing = true;
    this.userRepository.enroll(classToEnroll.classId)
      .subscribe(
        null,
        (err) => {console.error(err); classToEnroll.processing = false}, //add a toast message or something
        () => {classToEnroll.processing = false; classToEnroll.enrolled=true;},
      );
  }

  drop(classToDrop) {
    classToDrop.processing = true;
    this.userRepository.drop(classToDrop.classId)
      .subscribe(
        null,
        (err) => { console.error(err); classToDrop.processing = false}, //add a toast message or something
        () => {classToDrop.processing = false; classToDrop.enrolled=false;}
      );
  }

  mutateFirstProfessor(){
    this.visibleClasses[0].professor = "Zimmerman";
  }
  updateFirstProfessorImmutabily(){
    this.visibleClasses = [
      Object.assign(this.visibleClasses[0], { professor:"Zimmerman"}),
      ...this.visibleClasses.slice(1)
    ]
  }

  applyFilter(filter) {
    this.visibleClasses = this.filterClassesService.filterClasses(filter, this.classes);
  }
}
