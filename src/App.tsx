import React, { useState } from 'react';
import GlobalFonts from './components/Tabs/fonts/global-fonts';
import Tabs from './components/Tabs/Tabs';

import { TabsTypes, TabsArrayTypes } from './components/types/types';

const tabs: TabsArrayTypes = ['Pasted', 'Books', 'Articles'];

const App: React.FC = () => {
	const [selected, setSelected] = useState<TabsTypes>('Pasted');

	const onTabClick = function (tab: TabsTypes): void {
		setSelected(tab);
	};

	return (
		<>
			<GlobalFonts />
			<Tabs
				tabs={tabs}
				selected={selected}
				onSelect={onTabClick}
				duration={1}
			/>
		</>
	);
};

export default App;
