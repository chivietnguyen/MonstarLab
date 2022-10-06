// Functions that help with categories
const handleSelectCategories = (
	id,
	name,
	categoriesSelected,
	setCategoriesSelected
) => {
	setCategoriesSelected((prev) => {
		const isSelected = twoWayBindingChecked(categoriesSelected, id);

		if (isSelected) {
			return categoriesSelected.filter((item) => item.id !== id);
		} else {
			return [...prev, { id, name }]; // else add that item to our array
		}
	});
};

const getCategoryIdsArr = (categoriesSelected) => {
	const idsArr = [];
	categoriesSelected.forEach((item) => {
		idsArr.push(item.id);
	});

	return idsArr;
};

const twoWayBindingChecked = (arr, id) => {
	return getCategoryIdsArr(arr).includes(id);
};

const handleDeleteCategories = (
	id,
	categoriesSelected,
	setCategoriesSelected
) => {
	setCategoriesSelected(categoriesSelected.filter((item) => item.id !== id));
};
// ------------------------- //

export {
	handleSelectCategories,
	handleDeleteCategories,
	twoWayBindingChecked,
	getCategoryIdsArr,
};
