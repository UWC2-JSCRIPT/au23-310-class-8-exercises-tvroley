describe('Tests for the blackjack game', () => {
    it('dealerShouldDraw should return false for a 10, 9', () => {
        const hand = [
            {displayVal: 'Ten', val: 10, suit: 'hearts'},
            {displayVal: 'Nine', val: 9, suit: 'hearts'}
        ];

        const result = dealerShouldDraw(hand);

        expect(result).toEqual(false);        
    });

    it('dealerShouldDraw should return true for a Ace, 6', () => {
        const hand = [
            {displayVal: 'Ace', val: 11, suit: 'hearts'},
            {displayVal: 'Six', val: 6, suit: 'hearts'}
        ];

        const result = dealerShouldDraw(hand);

        expect(result).toEqual(true);        
    });

    it('dealerShouldDraw should return false for a 10, Ace, 6', () => {
        const hand = [
            {displayVal: 'Ace', val: 11, suit: 'hearts'},
            {displayVal: 'Six', val: 6, suit: 'hearts'},
            {displayVal: 'Ace', val: 11, suit: 'diamonds'}
        ];

        const result = dealerShouldDraw(hand);

        expect(result).toEqual(false);        
    });

    it('dealerShouldDraw should return true for a 2, 4, 2, 5', () => {
        const hand = [
            {displayVal: 'Two', val: 2, suit: 'hearts'},
            {displayVal: 'Four', val: 4, suit: 'hearts'},
            {displayVal: 'Two', val: 2, suit: 'diamonds'},
            {displayVal: 'Five', val: 5, suit: 'hearts'}
        ];

        const result = dealerShouldDraw(hand);

        expect(result).toEqual(true);        
    });
});