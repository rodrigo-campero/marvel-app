export class DiscountCoupon {
    createDb(): any[] {
        const discountCoupons = [
            { number: 812646, percentage: 10, isRare: true },
            { number: 919387, percentage: 15, isRare: false },
            { number: 818373, percentage: 20, isRare: false },
            { number: 948483, percentage: 25, isRare: true },
            { number: 101929, percentage: 30, isRare: false },
            { number: 797879, percentage: 27, isRare: false },
            { number: 939383, percentage: 22, isRare: false },
            { number: 921219, percentage: 16, isRare: true },
            { number: 333992, percentage: 13, isRare: false },
            { number: 494884, percentage: 5, isRare: true },
            { number: 559853, percentage: 100, isRare: false }
        ];
        return discountCoupons;
    }
}
