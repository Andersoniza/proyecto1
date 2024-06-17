// src/app/materia/materia.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MateriaService } from '../../services/materia.service';

@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.css']
})
export class MateriaComponent implements OnInit {
  materias: any[] = [];
  materiaForm: FormGroup;
  editingMateria: any = null;
  showAlert: boolean = false;
  alertMessage: string = '';
  alertType: 'success' | 'danger' = 'success';

  constructor(private fb: FormBuilder, private materiaService: MateriaService) {
    this.materiaForm = this.fb.group({
      nombre: ['', Validators.required],
      tema: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadMaterias();
  }

  loadMaterias(): void {
    this.materiaService.getAll().subscribe(
      (data) => {
        this.materias = data;
      },
      (error) => {
        console.error('Error al cargar las materias', error);
      }
    );
  }

  onSubmit(): void {
    if (this.materiaForm.valid) {
      const materiaData = this.materiaForm.value;
      if (this.editingMateria === null) {
        // Crear nueva materia
        this.materiaService.create(materiaData).subscribe(
          () => {
            this.showAlertMessage('Materia creada exitosamente', 'success');
            this.resetFormAndReload();
          },
          (error) => {
            console.error('Error al crear materia', error);
            this.showAlertMessage('Error al crear materia', 'danger');
          }
        );
      } else {
        // Actualizar materia existente
        this.materiaService.update(this.editingMateria.id, materiaData).subscribe(
          () => {
            this.showAlertMessage('Materia actualizada exitosamente', 'success');
            this.resetFormAndReload();
          },
          (error) => {
            console.error('Error al actualizar materia', error);
            this.showAlertMessage('Error al actualizar materia', 'danger');
          }
        );
      }
    }
  }

  editMateria(materia: any): void {
    this.editingMateria = materia;
    this.materiaForm.patchValue({
      nombre: materia.nombre,
      tema: materia.tema
    });
  }

  deleteMateria(id: number): void {
    if (confirm('¿Estás seguro de querer eliminar esta materia?')) {
      this.materiaService.delete(id).subscribe(
        () => {
          this.showAlertMessage('Materia eliminada exitosamente', 'success');
          this.resetFormAndReload();
        },
        (error) => {
          console.error('Error al eliminar materia', error);
          this.showAlertMessage('Error al eliminar materia', 'danger');
        }
      );
    }
  }

  showAlertMessage(message: string, type: 'success' | 'danger'): void {
    this.alertMessage = message;
    this.alertType = type;
    this.showAlert = true;
    setTimeout(() => {
      this.showAlert = false;
    }, 3000);
  }

  resetFormAndReload(): void {
    this.materiaForm.reset();
    this.editingMateria = null;
    this.loadMaterias();
  }
}
