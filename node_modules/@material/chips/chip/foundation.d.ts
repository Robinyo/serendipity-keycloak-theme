/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
import { MDCFoundation } from '@material/base/foundation';
import { MDCChipAdapter } from './adapter';
export declare class MDCChipFoundation extends MDCFoundation<MDCChipAdapter> {
    static readonly strings: {
        ADDED_ANNOUNCEMENT_ATTRIBUTE: string;
        ARIA_CHECKED: string;
        ARROW_DOWN_KEY: string;
        ARROW_LEFT_KEY: string;
        ARROW_RIGHT_KEY: string;
        ARROW_UP_KEY: string;
        BACKSPACE_KEY: string;
        CHECKMARK_SELECTOR: string;
        DELETE_KEY: string;
        END_KEY: string;
        ENTER_KEY: string;
        ENTRY_ANIMATION_NAME: string;
        HOME_KEY: string;
        INTERACTION_EVENT: string;
        LEADING_ICON_SELECTOR: string;
        NAVIGATION_EVENT: string;
        PRIMARY_ACTION_SELECTOR: string;
        REMOVED_ANNOUNCEMENT_ATTRIBUTE: string;
        REMOVAL_EVENT: string;
        SELECTION_EVENT: string;
        SPACEBAR_KEY: string;
        TAB_INDEX: string;
        TRAILING_ACTION_SELECTOR: string;
        TRAILING_ICON_INTERACTION_EVENT: string;
        TRAILING_ICON_SELECTOR: string;
    };
    static readonly cssClasses: {
        CHECKMARK: string;
        CHIP_EXIT: string;
        DELETABLE: string;
        HIDDEN_LEADING_ICON: string;
        LEADING_ICON: string;
        PRIMARY_ACTION: string;
        SELECTED: string;
        TEXT: string;
        TRAILING_ACTION: string; /** Whether a trailing icon click should immediately trigger exit/removal of the chip. */
        TRAILING_ICON: string;
    };
    static readonly defaultAdapter: MDCChipAdapter;
    /** Whether a trailing icon click should immediately trigger exit/removal of the chip. */
    private shouldRemoveOnTrailingIconClick_;
    constructor(adapter?: Partial<MDCChipAdapter>);
    isSelected(): boolean;
    setSelected(selected: boolean): void;
    setSelectedFromChipSet(selected: boolean, shouldNotifyClients: boolean): void;
    getShouldRemoveOnTrailingIconClick(): boolean;
    setShouldRemoveOnTrailingIconClick(shouldRemove: boolean): void;
    getDimensions(): ClientRect;
    /**
     * Begins the exit animation which leads to removal of the chip.
     */
    beginExit(): void;
    /**
     * Handles an interaction event on the root element.
     */
    handleInteraction(evt: MouseEvent | KeyboardEvent): void;
    /**
     * Handles a transition end event on the root element.
     */
    handleTransitionEnd(evt: TransitionEvent): void;
    /**
     * Handles an interaction event on the trailing icon element. This is used to
     * prevent the ripple from activating on interaction with the trailing icon.
     */
    handleTrailingIconInteraction(evt: MouseEvent | KeyboardEvent): void;
    /**
     * Handles a keydown event from the root element.
     */
    handleKeydown(evt: KeyboardEvent): void;
    removeFocus(): void;
    focusPrimaryAction(): void;
    focusTrailingAction(): void;
    private focusNextAction_;
    private getEvtSource_;
    private getDirection_;
    private focusPrimaryAction_;
    private focusTrailingAction_;
    private removeFocus_;
    private removeChip_;
    private shouldHandleInteraction_;
    private shouldRemoveChip_;
    private setSelected_;
    private notifySelection_;
    private notifyIgnoredSelection_;
}
export default MDCChipFoundation;
