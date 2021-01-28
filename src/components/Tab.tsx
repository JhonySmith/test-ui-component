import React from 'react';
import { Tab } from './styles/tab-style';

interface TabItemProps {
	tabName: string;
	selected: boolean;
	onTabClick(tab: string): void;
}

const TabItem: React.FC<TabItemProps> = (props) => {
	const { tabName, selected, onTabClick } = props;

	return (
		<Tab
			onClick={function (evt) {
				evt.preventDefault();
				onTabClick(tabName);
			}}
			selected={selected}
		>
			{tabName}
		</Tab>
	);
};

export default TabItem;
