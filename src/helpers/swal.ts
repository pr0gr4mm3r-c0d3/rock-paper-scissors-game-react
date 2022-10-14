import swal from 'sweetalert';

export const useSwal = async (IWin: boolean) => {
	swal({
		title: 'Good job!',
		icon: 'success',
	});

	const configSwal = {
		title: IWin ? 'Congratulations!!!' : 'Ooops Sorry!',
		text: `YOU ${IWin ? 'WIN' : 'LOSE'}`,
		icon: IWin ? 'success' : 'error',
		buttons: ['View Scores', 'New Game'],
	};
	return await swal(configSwal);
};
