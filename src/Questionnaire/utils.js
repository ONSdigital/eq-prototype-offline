import QuestionnaireClientStorageService from './Questionnaire.storage';

/**
 * Doesn't work, only returns the last promise created
 */
export function fetchExistingAnswersByGroup (groups) {

	let promise;

	groups.forEach((group) => {
		group.blocks.forEach((block) => {

			if (block.type === 'Questionnaire') {
				promise = QuestionnaireClientStorageService.getAnswersByGroupIdByBlockId(group.id, block.id);
			}
		})
	});

	return promise;
}

export function iterateGroupsBlocks (groups, callback) {
	groups.forEach((group) => {
		group.blocks.forEach((block) => {
			callback(group, block);
		})
	});
}
