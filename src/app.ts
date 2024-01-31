import fastify from 'fastify';

const app = fastify();

// Rota simples
app.get('/', async (request, reply) => {
  return { mensagem: 'Bem-vindo ao Fastify com TypeScript!' };
});

// Iniciar o servidor
const start = async () => {
  try {
    await app.listen(3000);
    console.log('Servidor iniciado em http://localhost:3000');
  } catch (err) {
    console.error('Erro ao iniciar o servidor:', err);
    process.exit(1);
  }
};

start();