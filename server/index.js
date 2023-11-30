import express from 'express';
import 'dotenv/config';
import router from './src/routers/index.js';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import admin from 'firebase-admin';

admin.initializeApp({
	credential: admin.credential.cert({
		type: process.env.FIREBASE_TYPE,
		project_id: process.env.FIREBASE_PROJECT_ID,
		private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
		private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDcXTZGw2PQ4+SE\np3RtZ8WmY98ycrN9uJ8HsCaco8OjsS+ltKFAlQzTmfX6fT6TKL3APSmcG0bf2HQv\njJCmozBL+4JS/xqi2qer4arv6r+lEgrlCMINEw/3OYu+0zOUfGuHU3Sggqt4iTON\n8tkKN0rAvLNgWqxRUM1ze3I7RgR3G0ToCt88BzWIad8zkcGB8mEN5JUuUxXNQGUl\ndDwSEvfkqhzYBqawKL4EHVDera8+IHNGtDbbT7w7fvisG9t1yaF4KNkMllucBpSc\nkh+oHQRQQxZHvleHg4lKRaw/xruhbwM0vFg7NFRAKBSGVqpV6QGab4138nKuA+72\nlv+7XZjzAgMBAAECggEAAkecliLTV4fkB1NMKw2Vx+DkoDr7jGNqkcPKwngXQAxH\nN+mkeWyRU2cWWl8NVKxpOiHn2kuV8h7lJNDJdk/d4gtaD82/0st8TJTrFcxR6z1C\ni5gJmeUGl0IrJfA9al3XJvFAFaEEcRzKQb+vayGjTlcla+vEOJsjZPxz9BUHWswS\nf18twZFhbz0aL0B5cOe5qcsZbwAYrpoxDhHcEuxVAR+8qFdeBVcU7sGQTdTJqmcs\nDTgn2rjwswAfg/lIlXDkWOC1SWWxmh3mgMkHCCpQhtl5zNSFbHlSlopC/hRxrSTX\nT/zvB23xZ13Qt1bzjq+UtfPX3HS5cHvcdvr5/hCTYQKBgQD+Y9/Fmyh30J2w+w4k\naGkYsstzb4Q9Z/ye9+4PvsIzE8EnS4H4lL8ViPhtOp/wYSaCQhJ1EL7NHF8+FxWz\noYBiqZActOHW1pWqz2xEumZObtFQNtzImaztSHGRpSiq5/Vddzrq541fMQcRKU52\nD1wEuN1W8dJemzsTACGRWTzaaQKBgQDdwjbBv2cMBWBo/VzWufIJGp8WYVhnnNEe\nbuC9BWFo5EOpP3t7Pn0weLDy+PmL0VUk+fs3Q9jkklpvyNQat8mz8bDWu8WCk8nJ\n013OZUavZloeTe2LiF1h6Vetu01a4tBRmqzXquJM6y0QhS5g95WFvd6OAoGIqtYY\nDtW5gaFU+wKBgQCsrJRnKIOWmJeBW1hlJC46Ypqw94A2wk/6g+Ym7+AYFY+loZ5O\nYoE2F+wxEHsiCn++KSUoKz6oMVsA5WCIttZToi89HRay4qNi9zrRiAkLsjMIFMVW\nsOFtix/zsbziDWNClzz52ETg2YGnh3dHsfNPDUDI1IpsR0gZBJzEcWNaCQKBgQC3\n8TXsRfCa1wbeb3KHphtuk8dsD/j9kOUhAkWmZIUlNVouVDr/wpijESltkTmlUVD3\n5+cKM1wAVKlxWbseIl7LxOmzZHNzWVUi9RE1d2pHaXXM90TX3Zff9GbG87s5bTPw\nzIUcK2Gk/doWfvI2eodrNVAaqVd63oHR2NRNGIqS6wKBgQDC58YgF53bLjJ7YYHY\nlX5I7bb+i2VmY0kljFpe6nkYiXs1HpM3TGJc0Z/tDPqSqJps34EhABz0RMGhGxaG\njs96QPEX8whvpzDl9GDGW9F4+THWLRxwtVk28L7/vKIJ7u6jX3IKuYsgq6RTxUbT\nFO5YILZ04Nyo19RkU0SBSA6ijA==\n-----END PRIVATE KEY-----\n",

		client_email: process.env.FIREBASE_CLIENT_EMAIL,
		client_id: process.env.FIREBASE_CLIENT_ID,
		auth_uri: process.env.FIREBASE_AUTH_URI,
		token_uri: process.env.FIREBASE_TOKEN_URI,
		auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
		client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL,
	}),
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(fileUpload());

app.use('/api', router);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));