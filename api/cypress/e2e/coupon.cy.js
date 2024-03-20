/// <reference types="cypress" />
import { faker } from '@faker-js/faker'

describe('Funcionalidades de Cupon', () => {
	let authorization = 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy'

	it('Listar todos - GET', () => {
		cy.request({
			method: 'GET',
			url: 'coupons',
			headers: { authorization: authorization }
		}).then((response) => {
			expect(response.status).to.equal(200)
		});
	});

	it('Listar um cupom - GET', () => {
		cy.request({
			method: 'GET',
			url: 'coupons/5592',
			headers: { authorization: authorization }
		}).then((response) => {
			expect(response.status).to.equal(200)
			expect(response.body).to.have.property('code')
		});
	});

	it('Cadastrar um cupom - POST', () => {
		cy.request({
			method: 'POST',
			url: 'coupons',
			body: {
				"code": faker.lorem.word(5),
				"amount": faker.finance.amount(),
				"discount_type": 'percent',
				"description": faker.lorem.word(25),
			},
			headers: { authorization: authorization }
		}).then((response) => {
			expect(response.status).to.equal(201)
			expect(response.body).to.have.property('code')
		});
	});
});