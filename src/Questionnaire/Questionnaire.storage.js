import localForage from 'localforage';

let store;

const answerStoreKey = "answers",
	answerMatchList = [
		'answer_id',
		'answer_instance',
		'block_id',
		'group_id',
		'group_instance'
	];

function createStore (config) {
	store = localForage.createInstance({
		driver: localForage.INDEXEDDB,
		version: 0,

		...config
	});
}

function checkValuesMatchForKeys (objKeys, obj1, obj2) {
	return objKeys.filter((objKey) => {
			return obj1[objKey] === obj2[objKey]
		})
		.length === objKeys.length;
}

function saveAnswer (answerObj) {
	return store.getItem(answerStoreKey)
		.then((answers) => {

			let existing,
				newAnswers = answers || [];

			/**
			 * Check existing answer
			 */
			existing = newAnswers.filter((item) => {
				return checkValuesMatchForKeys(answerMatchList, item, answerObj);
			})[0];

			if (existing) {
				newAnswers = newAnswers.map((item) => {
					return checkValuesMatchForKeys(answerMatchList, item, answerObj)
						? {
							...item,
							...answerObj
						}
						: item;
				})
			}
			else {
				newAnswers.push(answerObj);
			}

			return store
				.setItem(answerStoreKey, newAnswers)
				.then(() => store.getItem(answerStoreKey));
		});
}

function getAnswersByGroupIdByBlockId (groupId, blockId) {
	return store
		.getItem(answerStoreKey)
		.then((answers) => (answers || []).filter((item) => {
			return item.group_id === groupId && item.block_id === blockId;
		}));
}

export default {
	createStore: createStore,

	/**
	 * API
	 */
	saveAnswer: saveAnswer,
	getAnswersByGroupIdByBlockId: getAnswersByGroupIdByBlockId
}
