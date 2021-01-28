import React from 'react';

import TabItem from './Tab';

import { TabsList } from './style-tabs';

interface TabsProps {
	tabs: string[];
	selected: 'Pasted' | 'Books' | 'Articles';
	onTabClick(tab: string): void;
}

const Tabs: React.FC<TabsProps> = (props) => {
	const { tabs, selected, onTabClick } = props;

	return (
		<TabsList>
			{tabs.map((tab, index) => (
				<TabItem
					selected={selected === tab}
					tabName={tab}
					key={index}
					onTabClick={onTabClick}
				/>
			))}
		</TabsList>
	);
};

export default Tabs;
