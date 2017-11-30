module.exports = [
	{
		id: 'ENQ-AGE',
		label: 'Enquête âge',
		survey: [
			{
				type: 'input',
				label: 'Nom',
				variable: 'name',
				required: 'true',
			},
			{ type: 'input', label: 'Prénom', variable: 'firstName' },
		],
	},
	{
		id: 'ENQ-CS',
		label: 'Enquête CS',
		survey: [
			{
				type: 'multiIndividualResponse',
				label: "Sélectionner le nombre d'actifs du ménage :",
				min: 0,
				max: 10,
				variable: 'multiIndividualResponse',
				required: 'true',
				fields: [
					{
						type: 'input',
						label: 'Nom',
						variable: 'name',
						required: 'true',
					},
					{
						type: 'input',
						label: 'Prénom',
						variable: 'firstName',
						required: 'true',
					},
					{
						type: 'select',
						label: 'Sélectionner votre catégorie socio-professionnelle :',
						options: 'pcs2003level1',
						variable: 'cs1',
						required: 'true',
					},
				],
			},
			{
				type: 'select',
				label: "Le ménage est-il composé d'étudiant(s) ?",
				options: 'yesNo',
				variable: 'hasStudent',
				required: 'true',
			},
		],
	},
	{
		id: 'ENQ-PERMIS',
		label: 'Enquête permis de conduire',
		survey: [
			{
				type: 'select',
				label: 'Des membres du ménage ont-ils le permis de conduire ?',
				options: 'yesNo',
				variable: 'licence',
				required: 'true',
			},
			{
				type: 'multiIndividualResponse',
				label: 'Sélectionner le nombre de détenteur :',
				min: 0,
				max: 10,
				variable: 'multiIndividualResponse',
				required: 'true',
				filter: { variable: 'licence', type: 'equal', value: 'Y' },
				fields: [
					{
						type: 'input',
						label: 'Nom',
						variable: 'name',
						required: 'true',
					},
					{
						type: 'input',
						label: 'Prénom',
						variable: 'firstName',
						required: 'true',
					},
					{
						type: 'date-picker',
						label: 'A quelle date avez-vous obtenu votre permis de conduire ?',
						variable: 'licenceDate',
						required: 'true',
					},
				],
			},
		],
	},
];
