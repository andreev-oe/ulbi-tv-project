import type { IFlexProps } from '../Flex/Flex';
import { Flex } from '../Flex/Flex';

type TVStackProps = Omit<IFlexProps, 'direction'>;

export const VStack = (props: TVStackProps) => {
    const { align = 'start' } = props;
    return <Flex {...props} direction="column" align={align} />;
};
