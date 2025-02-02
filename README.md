# eCommerce amb React i Stripe

## Instruccions d'Instal·lació i Execució
### Requisits Previs
Abans de començar, assegura't que tens instal·lats els següents elements al teu sistema:

- Node.js (versió 14 o superior)
- npm (normalment s'instal·la automàticament amb Node.js)
- Git (opcional, si vols clonar el repositori)

### Instal·lació

#### 1. Clona el repositori:

```bash
git clone https://github.com/Ferran-Villagrasa-Povedano/m8-uf2-p1-stripe.git
cd m8-uf2-p1-stripe
```

#### 2. Configurar el backend

Abans d'executar el backend, assegura't que existeix el fitxer .env i que conté les variables d'entorn necessàries.

```properties
STRIPE_SECRET_KEY=sk_test_51Qh...
STRIPE_PUBLISHABLE_KEY=pk_test_51Qh...
CLIENT_URL=http://localhost:5173
```

#### 3. Executa el backend:

```bash
cd backend
npm install
npm run dev
```

#### 4. Executar el frontend

```bash
cd frontend
npm install
npm run dev
```

#### 5. Accedir a l'aplicació

Accedeix a l'aplicació en el teu navegador a http://localhost:5173.
