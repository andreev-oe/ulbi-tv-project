import { classNames } from './classNames';

describe('classNames', () => {
    test('with only one class', () => {
        expect(classNames({ rootClass: 'root' })).toBe('root');
    });

    test('with additional classes', () => {
        expect(classNames({ rootClass: 'root', additionalClasses: ['class1', 'class2'] })).toBe('root class1 class2');
    });

    test('with conditional classes', () => {
        expect(classNames({ rootClass: 'root', conditionalClasses: { class1: true, class2: false } })).toBe(
            'root class1',
        );
    });

    test('with all types of classes', () => {
        expect(
            classNames({
                rootClass: 'root',
                conditionalClasses: { class3: true, class4: false },
                additionalClasses: ['class1', 'class2'],
            }),
        ).toBe('root class3 class1 class2');
    });

    test('with no classes', () => {
        expect(classNames({ rootClass: '' })).toBe('');
    });
});
