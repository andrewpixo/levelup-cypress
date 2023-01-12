import DSL from './DSL';

export default class ClientPage extends DSL {
    public visit() {
        super.visit('accounting/clients', true);
    }
}
