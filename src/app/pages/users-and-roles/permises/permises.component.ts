import { Component } from '@angular/core';

export interface Permission {
  key: string;
  label: string;
  icon: string;
}

export interface Module {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface Role {
  id: string;
  name: string;
  label: string;
  color: string;
  badgeClass: string;
}

export interface RolePermission {
  [moduleId: string]: {
    [permissionKey: string]: boolean;
  };
}

@Component({
  selector: 'app-permises-ui',
  templateUrl: './permises.component.html',
  styleUrls: ['./permises.component.css'],
})
export class PermisesComponent {
  permissions: Permission[] = [
    { key: 'view', label: 'Ver', icon: 'pi pi-eye' },
    { key: 'create', label: 'Crear', icon: 'pi pi-plus-circle' },
    { key: 'edit', label: 'Editar', icon: 'pi pi-pencil' },
    { key: 'delete', label: 'Eliminar', icon: 'pi pi-trash' },
    { key: 'export', label: 'Exportar', icon: 'pi pi-download' },
  ];

  modules: Module[] = [
    {
      id: 'dashboard',
      name: 'Dashboard',
      icon: 'pi pi-home',
      description: 'Panel principal y métricas',
    },
    {
      id: 'reports',
      name: 'Reportes',
      icon: 'pi pi-chart-bar',
      description: 'Generación y descarga de reportes',
    },
    {
      id: 'users',
      name: 'Usuarios',
      icon: 'pi pi-users',
      description: 'Gestión de usuarios del sistema',
    },
    {
      id: 'sales',
      name: 'Ventas',
      icon: 'pi pi-shopping-cart',
      description: 'Módulo de punto de venta',
    },
    {
      id: 'inventory',
      name: 'Inventario',
      icon: 'pi pi-box',
      description: 'Control de stock y productos',
    },
    {
      id: 'accounting',
      name: 'Contabilidad',
      icon: 'pi pi-calculator',
      description: 'Cuentas, pagos y facturación',
    },
    {
      id: 'settings',
      name: 'Configuración',
      icon: 'pi pi-cog',
      description: 'Parámetros generales del sistema',
    },
    {
      id: 'audit',
      name: 'Auditoría',
      icon: 'pi pi-shield',
      description: 'Logs y trazabilidad de acciones',
    },
  ];

  roles: Role[] = [
    {
      id: 'admin',
      name: 'admin',
      label: 'Administrador',
      color: '#6366f1',
      badgeClass: 'badge-admin',
    },
    {
      id: 'manager',
      name: 'manager',
      label: 'Gerente',
      color: '#0ea5e9',
      badgeClass: 'badge-manager',
    },
    {
      id: 'cashier',
      name: 'cashier',
      label: 'Cajero',
      color: '#10b981',
      badgeClass: 'badge-cashier',
    },
    {
      id: 'auditor',
      name: 'auditor',
      label: 'Auditor',
      color: '#f59e0b',
      badgeClass: 'badge-auditor',
    },
    {
      id: 'readonly',
      name: 'readonly',
      label: 'Solo Lectura',
      color: '#8b5cf6',
      badgeClass: 'badge-readonly',
    },
  ];

  selectedRole: Role = this.roles[0];
  rolePermissions: { [roleId: string]: RolePermission } = {};
  hasChanges = false;
  searchText = '';
  filterMode: 'all' | 'enabled' | 'disabled' = 'all';

  constructor() {}

  ngOnInit(): void {
    this.initPermissions();
  }

  private initPermissions(): void {
    // Inicializar permisos por defecto para cada rol
    this.roles.forEach((role) => {
      this.rolePermissions[role.id] = {};
      this.modules.forEach((mod) => {
        this.rolePermissions[role.id][mod.id] = {};
        this.permissions.forEach((perm) => {
          // Admin tiene todo, cajero solo ventas/dashboard, auditor solo ver/exportar
          this.rolePermissions[role.id][mod.id][perm.key] =
            this.getDefaultPermission(role.id, mod.id, perm.key);
        });
      });
    });
  }

  private getDefaultPermission(
    roleId: string,
    moduleId: string,
    permKey: string,
  ): boolean {
    if (roleId === 'admin') return true;
    if (roleId === 'readonly') return permKey === 'view';
    if (roleId === 'auditor') return permKey === 'view' || permKey === 'export';
    if (roleId === 'manager') {
      if (moduleId === 'settings' || moduleId === 'users')
        return permKey === 'view';
      return permKey !== 'delete';
    }
    if (roleId === 'cashier') {
      if (['sales', 'dashboard'].includes(moduleId))
        return permKey === 'view' || permKey === 'create';
      return false;
    }
    return false;
  }

  get filteredModules(): Module[] {
    return this.modules.filter((mod) => {
      const matchesSearch =
        mod.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        mod.description.toLowerCase().includes(this.searchText.toLowerCase());
      if (!matchesSearch) return false;

      if (this.filterMode === 'all') return true;

      const perms = this.rolePermissions[this.selectedRole.id]?.[mod.id] ?? {};
      const hasAny = Object.values(perms).some((v) => v);

      return this.filterMode === 'enabled' ? hasAny : !hasAny;
    });
  }

  selectRole(role: Role): void {
    if (this.hasChanges) {
      this.selectedRole = role;
      this.hasChanges = false;
      // this.confirmationService.confirm({
      //   message: '¿Descartar los cambios no guardados?',
      //   header: 'Cambios pendientes',
      //   icon: 'pi pi-exclamation-triangle',
      //   accept: () => {
      //     this.selectedRole = role;
      //     this.hasChanges = false;
      //   },
      // });
    } else {
      this.selectedRole = role;
    }
  }

  getPermission(moduleId: string, permKey: string): boolean {
    return (
      this.rolePermissions[this.selectedRole.id]?.[moduleId]?.[permKey] ?? false
    );
  }

  togglePermission(moduleId: string, permKey: string): void {
    const current = this.getPermission(moduleId, permKey);
    this.rolePermissions[this.selectedRole.id][moduleId][permKey] = !current;
    this.hasChanges = true;
  }

  isModuleFullyGranted(moduleId: string): boolean {
    return this.permissions.every((p) => this.getPermission(moduleId, p.key));
  }

  isModulePartiallyGranted(moduleId: string): boolean {
    const vals = this.permissions.map((p) =>
      this.getPermission(moduleId, p.key),
    );
    return vals.some((v) => v) && !vals.every((v) => v);
  }

  toggleAllModulePermissions(moduleId: string): void {
    const allGranted = this.isModuleFullyGranted(moduleId);
    this.permissions.forEach((p) => {
      this.rolePermissions[this.selectedRole.id][moduleId][p.key] = !allGranted;
    });
    this.hasChanges = true;
  }

  grantAll(): void {
    this.modules.forEach((mod) => {
      this.permissions.forEach((perm) => {
        this.rolePermissions[this.selectedRole.id][mod.id][perm.key] = true;
      });
    });
    this.hasChanges = true;
  }

  revokeAll(): void {
    this.modules.forEach((mod) => {
      this.permissions.forEach((perm) => {
        this.rolePermissions[this.selectedRole.id][mod.id][perm.key] = false;
      });
    });
    this.hasChanges = true;
  }

  saveChanges(): void {
    // Aquí iría la llamada al servicio HTTP
    console.log(
      'Guardando permisos:',
      this.rolePermissions[this.selectedRole.id],
    );
    // this.messageService.add({
    //   severity: 'success',
    //   summary: 'Guardado',
    //   detail: `Permisos del rol "${this.selectedRole.label}" actualizados correctamente.`,
    //   life: 3000,
    // });
    // this.hasChanges = false;
  }

  discardChanges(): void {
    // this.confirmationService.confirm({
    //   message: '¿Deseas descartar todos los cambios no guardados?',
    //   header: 'Descartar cambios',
    //   icon: 'pi pi-exclamation-triangle',
    //   accept: () => {
    //     this.initPermissions();
    //     this.hasChanges = false;
    //     this.messageService.add({
    //       severity: 'info',
    //       summary: 'Descartado',
    //       detail: 'Cambios revertidos.',
    //       life: 2000,
    //     });
    //   },
    // });
  }

  getEnabledCount(roleId: string): number {
    let count = 0;
    this.modules.forEach((mod) => {
      this.permissions.forEach((perm) => {
        if (this.rolePermissions[roleId]?.[mod.id]?.[perm.key]) count++;
      });
    });
    return count;
  }

  getTotalPermissions(): number {
    return this.modules.length * this.permissions.length;
  }

  getProgressValue(roleId: string): number {
    return Math.round(
      (this.getEnabledCount(roleId) / this.getTotalPermissions()) * 100,
    );
  }
}
