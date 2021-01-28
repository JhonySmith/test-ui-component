import React, { useState } from 'react';
import GlobalFonts from './components/fonts/global-fonts';
import Tabs from './components/Tabs';

const tabs: string[] = ['Pasted', 'Books', 'Articles'];

const App: React.FC = () => {
	const [selected, setSelected] = useState<'Pasted' | 'Books' | 'Articles'>(
		'Pasted'
	);

	const onTabClick = function (tab: 'Pasted' | 'Books' | 'Articles'): void {
		setSelected(tab);
	};

	return (
		<>
			<GlobalFonts />
			<Tabs tabs={tabs} selected={selected} onTabClick={onTabClick} />
		</>
	);
};

export default App;
