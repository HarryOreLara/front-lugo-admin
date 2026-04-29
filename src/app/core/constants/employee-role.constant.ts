import { EmployeeRole } from '@enums/employee-role.enum';
import { IParameterEnum } from '@interfaces/index';

export const EMPLOYEE_ROLES: Array<IParameterEnum> = [
  {
    id: EmployeeRole.ADMIN,
    name: 'Administrador',
    containerClass:
      'col-12 md:col-6 md:border-right-1 border-bottom-1 surface-border',
    iconWrapperClass:
      'inline-flex border-circle align-items-center justify-content-center bg-blue-50 w-3rem h-3rem mb-4',
    icon: 'pi pi-user',
    iconClass: 'text-xl text-blue-500',
    description:
      'Responsable de la gestión general del sistema, supervisión de operaciones, administración de usuarios, configuración de permisos y control total sobre los procesos internos de la plataforma. Tiene acceso completo a las funcionalidades y módulos del sistema.',
  },
  {
    id: EmployeeRole.CASHIER,
    name: 'Cajero',
    containerClass: 'col-12 md:col-6 border-bottom-1 surface-border',
    iconWrapperClass:
      'inline-flex border-circle align-items-center justify-content-center bg-yellow-50 w-3rem h-3rem mb-4',
    icon: 'pi pi-wallet',
    iconClass: 'text-xl text-yellow-500',
    description:
      'Encargado de realizar operaciones de cobro, registro de pagos, emisión de comprobantes y control de movimientos de caja. Su función principal es garantizar una correcta gestión de ingresos y atención eficiente en los procesos de venta.',
  },
  {
    id: EmployeeRole.SELLER,
    name: 'Proveedor',
    containerClass:
      'col-12 md:col-6 md:border-right-1 border-bottom-1 surface-border',
    iconWrapperClass:
      'inline-flex border-circle align-items-center justify-content-center bg-blue-50 w-3rem h-3rem mb-4',
    icon: 'pi pi-user',
    iconClass: 'text-xl text-blue-500',
    description:
      'Responsable de la gestión comercial relacionada con la venta de productos o servicios, atención a clientes, seguimiento de pedidos y coordinación de abastecimiento. Participa activamente en el flujo de ventas y control de relaciones comerciales.',
  },
  {
    id: EmployeeRole.WAREHOUSE,
    name: 'Almacenero',
    containerClass: 'col-12 md:col-6 border-bottom-1 surface-border',
    iconWrapperClass:
      'inline-flex border-circle align-items-center justify-content-center bg-yellow-50 w-3rem h-3rem mb-4',
    icon: 'pi pi-wallet',
    iconClass: 'text-xl text-yellow-500',
    description:
      'Encargado del control, organización y supervisión del inventario dentro del almacén, incluyendo el ingreso, salida, almacenamiento y verificación de productos. Su labor asegura el correcto abastecimiento y disponibilidad de mercadería.',
  },
];
