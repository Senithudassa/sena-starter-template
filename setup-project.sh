#!/bin/zsh

# Install dependencies
npm install next react react-dom prisma @prisma/client eslint eslint-plugin-import

# Create valid Prisma schema
cat > prisma/schema.prisma <<EOF
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

model User {
  id        Int      @id @default(autoincrement())
  name      String
  email     String   @unique
  password  String
  role      String   @default("student")
  createdAt DateTime @default(now())
}
EOF

# Generate Prisma client
npx prisma generate

# Create home page
cat > pages/index.js <<EOF
import Header from '../components/Header';
import PrimaryButton from '../components/PrimaryButton';

export default function Home() { 
  return (
    <div className="min-h-screen bg-[#F8F5F0]">
      <Header />
      <main className="container mx-auto py-8 px-4">
        <h2 className="text-xl text-[#0F4C81] mb-4">Welcome to Project Sena!</h2>
        <PrimaryButton onClick={() => console.log('Clicked!')}>
          සුභ උදෑසනක්! (Good Morning!)
        </PrimaryButton>
      </main>
    </div>
  );
}
EOF

# Create test page
cat > pages/test-error.js <<EOF
export default function ErrorTestPage() {
  console.log("Valid log");
  console.logg("Invalid log - should show error");
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Error Test Page</h1>
      <p>Check editor for error highlighting on console.logg</p>
    </div>
  );
}
EOF

# Create .env file
echo "DATABASE_URL=\"mysql://user:password@localhost:3306/mydb\"" > .env

echo "✅ Project setup complete!"
echo "Next:"
echo "1. Run: ./utils/github-setup.sh"
echo "2. Start dev server: npm run dev"
