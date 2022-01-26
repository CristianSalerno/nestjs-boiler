import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestJs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //Swagger settings
  const options = new DocumentBuilder()
    .setTitle('Tasks')
    .setDescription('Task descriptions')
    .setVersion('1.0')
    .addTag('Tasks')
    .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api/docs', app, document, {
    explorer: true,
    swaggerOptions: {
      filter: true,
      showRequestDuration: true,
    },
  });

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
