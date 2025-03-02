// Вынесем схему в функцию для динамической валидации
import {z} from 'zod';


const mesError = {
    maxError: 'Max value must be greater than Min value',
    minError: 'Min value must be less than Max value',
};
export const createValidationSchema = (min: number, max: number) =>
    z.object({
        maxCount: z
            .number()
            .nonnegative({ message: mesError.maxError })
            .gte(min + 1, { message: mesError.maxError }),
        minCount: z
            .number()
            .nonnegative({ message: mesError.minError })
            .lte(max - 1, { message: mesError.minError }),
    });

export type Count = z.infer<ReturnType<typeof createValidationSchema>>;