import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module.ts";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

const app = await NestFactory.create(AppModule);
const config = new DocumentBuilder().setTitle("NestJS+Deno Lab").build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup("api", app, document);
await app.listen(4000);
