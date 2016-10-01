declare type Iteratee<T, O> = ((T) => O) | string;
declare type Comparator<T> = (T) => boolean;
declare type Predicate<T> = (T) => boolean;

declare class LodashArray {
    /**
     * Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
     * @since 3.0.0
     * @param array The array to process.
     * @param size The length of each chunk
     * @return Returns the new array of chunks.
     */
    chunk<T>(array: T[]): T[][];
    chunk<T>(array: T[], size: number): T[][];

    /**
     * Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
     * @since 0.1.0
     * @param array The array to compact.
     * @return Returns the new array of filtered values.
     */
    compact<T>(array: T[]): T[];

    /**
     * Creates a new array concatenating array with any additional arrays and/or values.
     * @since 4.0.0
     * @param array The array to concatenate.
     * @param values The values to concatenate.
     * @return Returns the new concatenated array.
     */
    concat(array: any[], ...values: any[]): any[];

    /**
     * Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.
     * @note Unlike _.pullAll, this method returns a new array.
     * @since 0.1.0
     * @param array The array to inspect.
     * @param values The values to exclude.
     * @return Returns the new array of filtered values.
     */
    difference<T>(array: T[], ...values: any[]): T[];

    /**
     * This method is like _.difference except that it accepts iteratee which is invoked for each element of array and values to generate the criterion by which they're compared. The order and references of result values are determined by the first array. The iteratee is invoked with one argument:
(value).
     * @note Unlike _.pullAllBy, this method returns a new array.
     * @since 4.0.0
     * @param array The array to inspect.
     * @param values The values to exclude.
     * @param iteratee The iteratee invoked per element.
     * @return Returns the new array of filtered values.
     */
    differenceBy<T, O>(array: T[], value: T[], iteratee?: Iteratee<T, O>): T[];
    differenceBy<T, O>(array: T[], value1: T[], value2: T[], iteratee?: Iteratee<T, O>): T[];
    differenceBy<T, O>(array: T[], value1: T[], value2: T[], value3: T[], iteratee?: Iteratee<T, O>): T[];
    differenceBy<T, O>(array: T[], value1: T[], value2: T[], value3: T[], value4: T[], iteratee?: Iteratee<T, O>): T[];

    /**
     * This method is like _.difference except that it accepts comparator which is invoked to compare elements of array to values. The order and references of result values are determined by the first array. The comparator is invoked with two arguments: (arrVal, othVal).
     * @note Unlike _.pullAllWith, this method returns a new array.
     * @sinco 4.0.0
     * @param array The array to inspect.
     * @param values The values to exclude.
     * @param comparator The comparator invoked per element.
     * @return Returns the new array of filtered values.
     */
    differenceWith<T>(array: T[], value: T[], comparatoe?: Comparator<T>): T[];
    differenceWith<T>(array: T[], value1: T[], comparatoe?: Comparator<T>): T[];
    differenceWith<T>(array: T[], value1: T[], value2: T[], comparatoe?: Comparator<T>): T[];
    differenceWith<T>(array: T[], value1: T[], value2: T[], value3: T[], comparatoe?: Comparator<T>): T[];
    differenceWith<T>(array: T[], value1: T[], value2: T[], value3: T[], value4: T[], comparatoe?: Comparator<T>): T[];

    /**
     * Creates a slice of array with n elements dropped from the beginning.
     * @since 0.5.0
     * @param array The array to query.
     * @param n The number of elements to drop.
     * @return Returns the slice of array.
     */
    drop<T>(array: T[], n?: number): T[];

    /**
     * Creates a slice of array with n elements dropped from the end.
     * @since 3.0.0
     * @param array The array to query.
     * @param n The number of elements to drop.
     * @return Returns the slice of array.
     */
    dropRight<T>(array: T[], n?: number): T[];

    /**
     * Creates a slice of array excluding elements dropped from the end. Elements are dropped until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).
     * @since 3.0.0
     * @param array The array to query.
     * @param predicate The function invoked per iteration.
     * @return Returns the slice of array.
     */
    dropRightWhile<T>(array: T[], predicate?: Predicate<T>): T[];

    /**
     * Creates a slice of array excluding elements dropped from the beginning. Elements are dropped until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).
     * @since 3.0.0
     * @param array The array to query.
     * @param predicate The function invoked per iteration.
     * @return Returns the slice of array.
     */
    dropWhile<T>(array: T[], predicate?: Predicate<T>): T[];

    /**
     * Fills elements of array with value from start up to, but not including, end.
     * @note This method mutates array.
     * @since 3.2.0
     * @param array The array to fill.
     * @param value The value to fill array with.
     * @param start The start position.
     * @param end The end position.
     * @return Returns array.
     */
    fill<T, F>(array: T[], value: F, start?: number, end?: number): (T | F)[];
}

declare class LodashCollection {
    
}

declare class LodashDate {
    /**
     * Gets the timestamp of the number of milliseconds that have elapsed since the Unix epoch (1 January 1970 00:00:00 UTC).
     * @since 2.4.0
     * @return Returns the timestamp.
     */
    now(): number;
}

declare class LodashFunction {
    
}

declare class LodashLang {
    
}

declare class LodashMath {
    /**
     * Adds two numbers.
     * @since 3.4.0
     * @param augend The first number in an addition.
     * @param addend The second number in an addition.
     * @return Returns the total.
     */
    add(augend: number, addend: number): number;

    /**
     * Computes number rounded up to precision.
     * @since 3.10.0
     * @param number The number to round up.
     * @param precision The precision to round up to.
     * @return Returns the rounded up number.
     */
    ceil(number: number, precision?: number): number;

    /**
     * Divide two numbers.
     * @since 4.7.0
     * @param dividend The first number in a division.
     * @param divisor The second number in a division.
     * @return Returns the quotient.
     */
    divide(dividend: number, divisor: number): number;

    /**
     * Computes number rounded down to precision.
     * @since 3.10.0
     * @param number The number to round down.
     * @param precision The precision to round down to.
     * @return Returns the rounded down number.
     */
    floor(number: number, precision?: number): number;

    /**
     * Computes the maximum value of array. If array is empty or falsey, undefined is returned.
     * @since 0.1.0
     * @param array The array to iterate over.
     * @return Returns the maximum value.
     */
    max(array: number[]): number | void;

    /**
     * This method is like _.max except that it accepts iteratee which is invoked for each element in array to generate the criterion by which the value is ranked. The iteratee is invoked with one argument: (value).
     * @since 4.0.0
     * @param array The array to iterate over.
     * @param iteratee The iteratee invoked per element.
     * @return Returns the maximum value.
     */
    maxBy<T>(array: T[]): T;
    maxBy<T, O>(array: T[], iteratee?: Iteratee<T, O>): O;
}

declare class LodashNumber {
    
}

declare class LodashObject {
    /**
     * Assigns own and inherited enumerable string keyed properties of source objects to the destination object for all destination properties that resolve to undefined. Source objects are applied from left to right. Once a property is set, additional values of the same property are ignored.
     * @note This method mutates object.
     * @since 0.1.0
     * @param object The destination object.
     * @param sources The source objects.
     * @return Returns object.
     */
    defaults<T, S1>(object: T, source: S1): T & S1;
    defaults<T, S1, S2>(object: T, source1: S1, source2: S2): T & S1 & S2;
    defaults<T, S1, S2, S3>(object: T, source1: S1, source2: S2, source3: S3): T & S1 & S2 & S3;
    defaults<T, S1, S2, S3, S4>(object: T, source: S1, source2: S2, source3: S3, source4: S4): T & S1 & S2 & S3 & S4;
    defaults<T>(object: T, ...sources: any[]): T & any;
}

declare class LodashSeq {
    
}

declare class LodashString {
    
}

declare class LodashUtil
{
    /**
     * Checks value to determine whether a default value should be returned in its place. The defaultValue is returned if value is NaN, null, or undefined.
     * @since 4.14.0
     * @param value The value to check.
     * @param defaultsValue The default value.
     * @return Returns the resolved value.
     */
    defaultTo<T1, T2>(value: T1, defaultsValue: T2): T1 & T2;
}

declare class LodashProperties {
    VERSION: string;
    templateSettings: {
        escape: RegExp;
        evaluate: RegExp;
        imports: any;
        interpolate: RegExp;
        variable: string;
    }
}

declare var _LodashStatic:
    LodashArray & LodashCollection &
    LodashDate &
    LodashFunction & LodashLang &
    LodashMath & LodashNumber &
    LodashObject & LodashSeq &
    LodashString &
    LodashUtil & LodashProperties;

export = _LodashStatic;