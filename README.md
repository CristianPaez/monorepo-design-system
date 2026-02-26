# Suite Monorepo v2

Monorepo moderno construido con Next.js, Design System, Storybook y Vitest. Optimizado para desarrollo escalable con componentes reutilizables y documentación interactiva.

## 🏗️ Arquitectura

```
suite-monorepo-v2/
├── apps/                    # Aplicaciones finales
│   ├── web-admin/          # Panel de administración (Next.js)
│   └── storybook/          # Documentación de componentes (Vite)
├── packages/               # Paquetes compartidos
│   ├── design-system/      # Sistema de diseño UI
│   ├── config/             # Configuraciones compartidas
│   └── shared/             # Utilidades comunes
└── tooling/                # Scripts y herramientas
```

## 🚀 Stack Tecnológico

- **Framework**: Next.js 14+ con App Router
- **Lenguaje**: TypeScript
- **Package Manager**: pnpm
- **Orquestación**: Turbo
- **Design System**: Componentes personalizados con Storybook
- **Testing**: Vitest + Testing Library
- **Styling**: CSS con tokens de diseño
- **Build Tool**: Vite (Storybook)

## 📋 Requisitos Previos

- Node.js 18+
- pnpm 10.27.0+
- Git

## 🛠️ Instalación

```bash
# Clonar el repositorio
git clone <repository-url>
cd suite-monorepo-v2

# Instalar dependencias
pnpm install
```

## 🎯 Comandos Disponibles

### Desarrollo

```bash
# Iniciar todas las apps en modo desarrollo
pnpm dev

# Iniciar solo el panel de administración
pnpm web-admin

# Iniciar Storybook para documentación
pnpm storybook
```

### Build y Producción

```bash
# Construir todas las aplicaciones
pnpm build

# Construir Storybook para producción
pnpm storybook:build
```

### Calidad y Testing

```bash
# Ejecutar todos los tests
pnpm test

# Ejecutar linting en todos los paquetes
pnpm lint
```

### Design System

```bash
# Sincronizar tokens de diseño (Supernova mock)
pnpm sync:tokens
```

## 🎨 Design System

El monorepo incluye un design system completo con:

- **Componentes**: Botones, inputs, cards, etc.
- **Tokens**: Colores, tipografía, espaciado
- **Storybook**: Documentación interactiva
- **Tests**: Cobertura de componentes

### Usar el Design System

```typescript
import { Button, Card } from '@repo/design-system';
import '@repo/design-system/theme.css';

function App() {
  return (
    <Card>
      <Button variant="primary">Click me</Button>
    </Card>
  );
}
```

## 🔧 Configuración

### Variables de Entorno

Crea un archivo `.env.local` en la raíz:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

### Turbo

La configuración de Turbo se encuentra en `turbo.json` y optimiza:

- Cache de builds
- Dependencias entre paquetes
- Ejecución paralela de tareas

## 📦 Estructura de Paquetes

### `@repo/design-system`

Componentes UI reutilizables con Storybook

### `@repo/config`

Configuraciones compartidas de TypeScript, ESLint, Vitest

### `@repo/shared`

Utilidades y tipos comunes entre aplicaciones

## 🧪 Testing

El proyecto utiliza Vitest para testing:

```bash
# Ejecutar tests en modo watch
pnpm --filter @repo/design-system test

# Ejecutar tests con cobertura
pnpm --filter @repo/design-system test --coverage
```

## 🚀 Despliegue

### Build de Producción

```bash
pnpm build
```

### Variables de Entorno de Producción

- `NEXT_PUBLIC_API_URL`: URL de la API
- `NODE_ENV`: environment

## 🤝 Contribución

1. Fork del repositorio
2. Crear rama feature: `git checkout -b feature/nueva-funcionalidad`
3. Commit de cambios: `git commit -m 'Add nueva funcionalidad'`
4. Push a la rama: `git push origin feature/nueva-funcionalidad`
5. Abrir Pull Request

## 📝 Licencia

ISC License - ver archivo [LICENSE](LICENSE) para detalles

## 🔗 Enlaces Útiles

- [Documentación de Next.js](https://nextjs.org/docs)
- [Storybook](http://localhost:6006)
- [Panel de Administración](http://localhost:3000)
