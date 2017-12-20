export default class QuestionnaireService {

	static retrieve () {
		const url = 'survey-schema.json';

		return fetch(url, {
			"Content-Type": "application/json"
		})
			.then((response) => response.json());
	}
};
